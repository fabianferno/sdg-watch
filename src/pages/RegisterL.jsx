import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ERC20Sender,ERC20 } from '../helper'
import Layout from "../components/Layout";
import { useContract, useSigner } from 'wagmi'
import { Contract } from 'ethers';
import * as XLSX from "xlsx";
import Web3 from 'web3'

function Register() {
const { data: signer } = useSigner();
let ERC20ContractAddresses = {
  "ethereum-2":"0x254d06f33bDc5b8ee05b2ea472107E300226659A",
  "binance":"0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2",
  "Polygon":"0x2c852e740B62308c46DD29B982FBb650D063Bd07",
  "Avalanche":"0x57F1c63497AEe0bE305B8852b354CEc793da43bB",
  "base":"0x254d06f33bDc5b8ee05b2ea472107E300226659A",
  "optimism":"0x254d06f33bDc5b8ee05b2ea472107E300226659A"
}
let deployedContractAddresses ={
  "ethereum-2":"0x22107E300226659A",
  "binance":"0x98faB811B785b81c64Ac875b31CC9E40F9D2",
  "Polygon":"0x7",
  "Avalanche":"0x57F1E305B8852b354CEc793da43bB",
  "base":"0x2",
  "optimism":"0x255b2ea472107E300226659A"
}
console.log(signer);
const contract = useContract({
    address: ERC20Sender.address,
    abi: ERC20Sender.abi,
    signerOrProvider: signer,
  })

  let history = useNavigate();
  const [data, setData] = useState([]);
  const [amount,setAmount] = useState(0);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  async function distributeFunds() {
    console.log(data);
    let n = data.length;
    const result = {};

    data.forEach((row) => {
        const chainValue = row.Chain;
        if (!result[chainValue]) {
            result[chainValue] = {
                Addresses: [],
                Amounts: []
            };
        }
    
        result[chainValue].Addresses.push(row['Receiving Address']);
        result[chainValue].Amounts.push(row['Amount']);
    });
    
    console.log(result);
    const { ethereum } = window;
    let web3 = new Web3(ethereum);
    let contract = new web3.eth.Contract(ERC20Sender.abi, ERC20Sender.address);

    for (const chainName in result) {
      console.log(`Chain Name: ${chainName}`);
      console.log('Addresses:', result[chainName].Addresses);
      console.log('Amounts:', result[chainName].Amounts);
      let amount = 0;
      for(const i in result[chainName].Amounts){
          amount+=parseInt(i);
      }
    //call approve function on aUSDC contract with the amount on the contract of that chain
    let aUSDCAddr = ERC20ContractAddresses[chainName];
    const aUSDCcontract = new web3.eth.Contract(ERC20.abi, aUSDCAddr);
    console.log(aUSDCcontract);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    const res1 = await aUSDCcontract.methods.approve(ERC20Sender.address,amount).send({
      from: accounts[0],
    });
    console.log(res1);
    const amountInWei = web3.utils.toWei(0.00001, 'ether');
    console.log(amountInWei);
    console.log(result[chainName].Addresses, result[chainName].Amounts, chainName,deployedContractAddresses[chainName])
    const res2 = await contract.methods.sendPayment(result[chainName].Addresses, result[chainName].Amounts, chainName,deployedContractAddresses[chainName],"aUSDC").send({
      from: accounts[0],
      value: amountInWei
    });
    console.log(res2);
    }
    };
    
    //open Loading modal
  
  return (
      <section className="pt-5">
          <div className="text-dark container" style={{ paddingTop: "150px" }}>
            <div className="mb-5 d-flex justify-content-between align-items-center">
              <h1 className="fw-bold text-white ">Upload Excel File</h1>
            </div>
            <section className="pb-5 mb-5">
              <form>
                <div className="form-group my-4">
                    <input 
                        type="file" 
                        accept=".xlsx, .xls" 
                        onChange={handleFileUpload} 
                    />

      {data.length > 0 && (
        <table className="text-white m-4">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
                </div>
              </form>
            </section>
                </div>

              <div className="mb-5 d-flex justify-content-between  align-items-center">
              <h1 className="fw-bold text-white ">Total amount is: {amount}</h1>
            </div>
              <div
                onClick={() => distributeFunds()}
                className="mt-5 btn d-block btn-lg text-dark fw-bold btn-primary p-3"
              >
                Approve and Distribute ✅
              </div>
    </section>
  );
}

export default Register;

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { healthifyContract,ERC20 } from '../helper'
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

console.log(signer);
const contract = useContract({
    address: healthifyContract.address,
    abi: healthifyContract.abi,
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
    const columns = {};
        data.forEach((row) => {
            Object.keys(row).forEach((columnKey) => {
                if (!columns[columnKey]) {
                    columns[columnKey] = [];
                }
                columns[columnKey].push(row[columnKey]);
            });
        });
    console.log(columns);
    
    const destContracts = [];
    let sum=0;
    for(let i = 0; i < n; i++) {
      destContracts.push(ERC20ContractAddresses[columns['Chain'][i]]);
      sum+=parseInt(columns['Amount'][i]);
    }

    setAmount(sum);
    console.log(columns['Receiving Address']);
    console.log(columns['Amount']);
    console.log( columns['Chain']);
    console.log(destContracts);
    const { ethereum } = window;
    let web3 = new Web3(ethereum);
    let contract = new web3.eth.Contract(healthifyContract.abi, healthifyContract.address)
    //call approve function on aUSDC contract with the amount
    let aUSDCAddr = ERC20ContractAddresses['Polygon'];
    const aUSDCcontract = new web3.eth.Contract(ERC20.abi, aUSDCAddr);
    console.log(aUSDCcontract);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    const res1 = await aUSDCcontract.methods.approve(healthifyContract.address,amount).send({
      from: accounts[0],
    });
    const amountInWei = web3.utils.toWei(1000, 'ether');
    console.log(amountInWei);
    const res2 = await contract.methods.sendPayment(columns['Receiving Address'], columns['Amount'], columns['Chain'],destContracts,n).send({
      from: accounts[0],
      value: amountInWei
    });
    console.log(res2);
    //open Loading modal
  }

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

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDynamicInvoiceTokenActions,
  IDynamicInvoiceTokenActionsInterface,
} from "../../../../contracts/interfaces/dynamic-invoice-token/IDynamicInvoiceTokenActions";

const _abi = [
  {
    inputs: [],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_requestId",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_paymentReference",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "spawnChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDynamicInvoiceTokenActions__factory {
  static readonly abi = _abi;
  static createInterface(): IDynamicInvoiceTokenActionsInterface {
    return new Interface(_abi) as IDynamicInvoiceTokenActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDynamicInvoiceTokenActions {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IDynamicInvoiceTokenActions;
  }
}

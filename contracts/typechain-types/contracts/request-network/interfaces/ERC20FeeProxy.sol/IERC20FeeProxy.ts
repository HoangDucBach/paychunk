/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface IERC20FeeProxyInterface extends Interface {
  getFunction(
    nameOrSignature: "transferFromWithReferenceAndFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "TransferWithReferenceAndFee"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "transferFromWithReferenceAndFee",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      AddressLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "transferFromWithReferenceAndFee",
    data: BytesLike
  ): Result;
}

export namespace TransferWithReferenceAndFeeEvent {
  export type InputTuple = [
    tokenAddress: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    paymentReference: BytesLike,
    feeAmount: BigNumberish,
    feeAddress: AddressLike
  ];
  export type OutputTuple = [
    tokenAddress: string,
    to: string,
    amount: bigint,
    paymentReference: string,
    feeAmount: bigint,
    feeAddress: string
  ];
  export interface OutputObject {
    tokenAddress: string;
    to: string;
    amount: bigint;
    paymentReference: string;
    feeAmount: bigint;
    feeAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC20FeeProxy extends BaseContract {
  connect(runner?: ContractRunner | null): IERC20FeeProxy;
  waitForDeployment(): Promise<this>;

  interface: IERC20FeeProxyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  transferFromWithReferenceAndFee: TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _paymentReference: BytesLike,
      _feeAmount: BigNumberish,
      _feeAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "transferFromWithReferenceAndFee"
  ): TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _paymentReference: BytesLike,
      _feeAmount: BigNumberish,
      _feeAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "TransferWithReferenceAndFee"
  ): TypedContractEvent<
    TransferWithReferenceAndFeeEvent.InputTuple,
    TransferWithReferenceAndFeeEvent.OutputTuple,
    TransferWithReferenceAndFeeEvent.OutputObject
  >;

  filters: {
    "TransferWithReferenceAndFee(address,address,uint256,bytes,uint256,address)": TypedContractEvent<
      TransferWithReferenceAndFeeEvent.InputTuple,
      TransferWithReferenceAndFeeEvent.OutputTuple,
      TransferWithReferenceAndFeeEvent.OutputObject
    >;
    TransferWithReferenceAndFee: TypedContractEvent<
      TransferWithReferenceAndFeeEvent.InputTuple,
      TransferWithReferenceAndFeeEvent.OutputTuple,
      TransferWithReferenceAndFeeEvent.OutputObject
    >;
  };
}

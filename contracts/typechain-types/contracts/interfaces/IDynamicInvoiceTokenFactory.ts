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
} from "../../common";

export interface IDynamicInvoiceTokenFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createDynamicInvoiceToken"
      | "getDynamicInvoiceToken"
      | "owner"
      | "setOwner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DynamicInvoiceTokenCreated" | "OwnerChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createDynamicInvoiceToken",
    values: [
      string,
      string,
      string,
      BytesLike,
      AddressLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDynamicInvoiceToken",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "createDynamicInvoiceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDynamicInvoiceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
}

export namespace DynamicInvoiceTokenCreatedEvent {
  export type InputTuple = [
    dynamicInvoiceToken: AddressLike,
    paymentReference: BytesLike
  ];
  export type OutputTuple = [
    dynamicInvoiceToken: string,
    paymentReference: string
  ];
  export interface OutputObject {
    dynamicInvoiceToken: string;
    paymentReference: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerChangedEvent {
  export type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [oldOwner: string, newOwner: string];
  export interface OutputObject {
    oldOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IDynamicInvoiceTokenFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IDynamicInvoiceTokenFactory;
  waitForDeployment(): Promise<this>;

  interface: IDynamicInvoiceTokenFactoryInterface;

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

  createDynamicInvoiceToken: TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _requestId: string,
      _paymentReference: BytesLike,
      _payer: AddressLike,
      _payee: AddressLike,
      _amount: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  getDynamicInvoiceToken: TypedContractMethod<
    [_paymentReference: BytesLike],
    [string],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createDynamicInvoiceToken"
  ): TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _requestId: string,
      _paymentReference: BytesLike,
      _payer: AddressLike,
      _payee: AddressLike,
      _amount: BigNumberish
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getDynamicInvoiceToken"
  ): TypedContractMethod<[_paymentReference: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "DynamicInvoiceTokenCreated"
  ): TypedContractEvent<
    DynamicInvoiceTokenCreatedEvent.InputTuple,
    DynamicInvoiceTokenCreatedEvent.OutputTuple,
    DynamicInvoiceTokenCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerChanged"
  ): TypedContractEvent<
    OwnerChangedEvent.InputTuple,
    OwnerChangedEvent.OutputTuple,
    OwnerChangedEvent.OutputObject
  >;

  filters: {
    "DynamicInvoiceTokenCreated(address,bytes)": TypedContractEvent<
      DynamicInvoiceTokenCreatedEvent.InputTuple,
      DynamicInvoiceTokenCreatedEvent.OutputTuple,
      DynamicInvoiceTokenCreatedEvent.OutputObject
    >;
    DynamicInvoiceTokenCreated: TypedContractEvent<
      DynamicInvoiceTokenCreatedEvent.InputTuple,
      DynamicInvoiceTokenCreatedEvent.OutputTuple,
      DynamicInvoiceTokenCreatedEvent.OutputObject
    >;

    "OwnerChanged(address,address)": TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
    OwnerChanged: TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
  };
}

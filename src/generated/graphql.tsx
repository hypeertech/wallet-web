import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  ObjectID: any;
  ProjectID: any;
  TaskID: any;
  UserID: any;
  UserPassword: any;
};

export type AuthLoginInput = {
  password: Scalars['UserPassword'];
  username: Scalars['String'];
};

export type AuthLoginPayload = {
  __typename?: 'AuthLoginPayload';
  query?: Maybe<Query>;
};

export type AuthLogoutPayload = {
  __typename?: 'AuthLogoutPayload';
  query?: Maybe<Query>;
};

export type HtmlImageElement = {
  __typename?: 'HTMLImageElement';
  imageset?: Maybe<Scalars['String']>;
  srcset?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<MutationAuth>;
  project?: Maybe<MutationProject>;
  task?: Maybe<MutationTask>;
  user?: Maybe<MutationUser>;
};

export type MutationAuth = {
  __typename?: 'MutationAuth';
  login?: Maybe<AuthLoginPayload>;
  logout?: Maybe<AuthLogoutPayload>;
};


export type MutationAuthLoginArgs = {
  input: AuthLoginInput;
};

export type MutationProject = {
  __typename?: 'MutationProject';
  add?: Maybe<ProjectAddPayload>;
};


export type MutationProjectAddArgs = {
  input: ProjectAddInput;
};

export type MutationTask = {
  __typename?: 'MutationTask';
  add?: Maybe<TaskAddPayload>;
  delete?: Maybe<TaskDeletePayload>;
  edit?: Maybe<TaskEditPayload>;
  remove?: Maybe<TaskRemovePayload>;
};


export type MutationTaskAddArgs = {
  input: TaskAddInput;
};


export type MutationTaskDeleteArgs = {
  input: TaskDeleteInput;
};


export type MutationTaskEditArgs = {
  input: Array<TaskEditInput>;
};


export type MutationTaskRemoveArgs = {
  input: TaskRemoveInput;
};

export type MutationUser = {
  __typename?: 'MutationUser';
  signUp: UserSignUpPayload;
};


export type MutationUserSignUpArgs = {
  input: UserSignUpInput;
};

export type Pk = {
  __typename?: 'PK';
  /**
   * A URL to be passed to the associated app when launching it.
   *
   * The app receives this URL in the [application:didFinishLaunchingWithOptions](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1622921-application): and [application:openURL:options:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623112-application) methods of its app delegate.
   *
   * If this key is present, the `associatedStoreIdentifiers` key must also be present.
   */
  appLaunchURL?: Maybe<Scalars['String']>;
  /**
   * A list of iTunes Store item identifiers for the associated apps.
   *
   * Only one item in the list is used—the first item identifier for an app compatible with the current device. If the app is not installed, the link opens the App Store and shows the app. If the app is already installed, the link launches the app.
   */
  associatedStoreIdentifiers?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The authentication token to use with the web service. The token must be 16 characters or longer. */
  authenticationToken?: Maybe<Scalars['String']>;
  background?: Maybe<HtmlImageElement>;
  /** Background color of the pass, specified as an CSS-style RGB triple. For example, rgb(23, 187, 82). */
  backgroundColor?: Maybe<Scalars['String']>;
  /**
   * Information specific to the pass’s barcode.
   * @deprecated Deprecated in iOS 9.0 and later; use `barcodes` instead.
   */
  barcode?: Maybe<PkBarcode>;
  /**
   * Information specific to the pass’s barcode. The system uses the first valid barcode dictionary in the array. Additional dictionaries can be added as fallbacks.
   *
   * Available only in iOS 9.0 and later.
   */
  barcodes?: Maybe<Array<Maybe<PkBarcode>>>;
  /**
   * Beacons marking locations where the pass is relevant.
   *
   * Available in iOS 7.0.
   */
  beacons?: Maybe<Array<Maybe<PkBeacon>>>;
  /** Information specific to a boarding pass. */
  boardingPass?: Maybe<PkPass>;
  /** Information specific to a coupon. */
  coupon?: Maybe<PkPass>;
  /**
   * Brief description of the pass, used by the iOS accessibility technologies.
   *
   * Don’t try to include all of the data on the pass in its description, just include enough detail to distinguish passes of the same type
   */
  description: Scalars['String'];
  /** Information specific to an event ticket. */
  eventTicket?: Maybe<PkPass>;
  /**
   * Date and time when the pass expires.
   *
   * The value must be a complete date with hours and minutes, and may optionally include seconds.
   *
   * Available in iOS 7.0.
   */
  expirationDate?: Maybe<Scalars['String']>;
  /** Foreground color of the pass, specified as a CSS-style RGB triple. For example, rgb(100, 10, 110). */
  foregroundColor?: Maybe<Scalars['String']>;
  /** Version of the file format. The value must be 1. */
  formatVersion: Scalars['Int'];
  /** Information specific to a generic pass. */
  generic?: Maybe<PkPass>;
  /**
   * Optional for event tickets and boarding passes; otherwise not allowed. Identifier used to group related passes. If a grouping identifier is specified, passes with the same style, pass type identifier, and grouping identifier are displayed as a group. Otherwise, passes are grouped automatically.
   *
   * Use this to group passes that are tightly related, such as the boarding passes for different connections of the same trip.
   *
   * Available in iOS 7.0.
   */
  groupingIdentifier?: Maybe<Scalars['String']>;
  icon?: Maybe<HtmlImageElement>;
  /**
   * Color of the label text, specified as a CSS-style RGB triple. For example, rgb(255, 255, 255).
   *
   * If omitted, the label color is determined automatically.
   */
  labelColor?: Maybe<Scalars['String']>;
  /** Locations where the pass is relevant. For example, the location of your store. */
  locations?: Maybe<Array<Maybe<PkLocation>>>;
  logo?: Maybe<HtmlImageElement>;
  /** Text displayed next to the logo on the pass. */
  logoText?: Maybe<Scalars['String']>;
  /**
   * Maximum distance in meters from a relevant latitude and longitude that the pass is relevant. This number is compared to the pass’s default distance and the smaller value is used.
   *
   * Available in iOS 7.0.
   */
  maxDistance?: Maybe<Scalars['Int']>;
  /**
   * Information used for Value Added Service Protocol transactions.
   *
   * Available in iOS 9.0.
   */
  nfc?: Maybe<Pknfc>;
  /** Display name of the organization that originated and signed the pass. */
  organizationName: Scalars['String'];
  /** Pass type identifier, as issued by Apple. The value must correspond with your signing certificate. */
  passTypeIdentifier: Scalars['String'];
  /**
   * Recommended for event tickets and boarding passes; otherwise optional. Date and time when the pass becomes relevant. For example, the start time of a movie.
   *
   * The value must be a complete date with hours and minutes, and may optionally include seconds.
   */
  relevantDate?: Maybe<Scalars['String']>;
  /** Serial number that uniquely identifies the pass. No two passes with the same pass type identifier may have the same serial number. */
  serialNumber: Scalars['String'];
  /** Information specific to a store card. */
  storeCard?: Maybe<PkPass>;
  /**
   * If `true`, the strip image is displayed without a shine effect. The default value prior to iOS 7.0 is `false`.
   *
   * In iOS 7.0, a shine effect is never applied, and this key is deprecated.
   *
   */
  suppressStripShine?: Maybe<Scalars['Boolean']>;
  /** Team identifier of the organization that originated and signed the pass, as issued by Apple. */
  teamIdentifier: Scalars['String'];
  thumbnail?: Maybe<HtmlImageElement>;
  /**
   * Custom information for companion apps. This data is not displayed to the user.
   *
   * For example, a pass for a cafe could include information about the user’s favorite drink and sandwich in a machine-readable form for the companion app to read, making it easy to place an order for “the usual” from the app.
   *
   * Available in iOS 7.0.
   */
  userInfo?: Maybe<Scalars['JSON']>;
  /**
   * Indicates that the pass is void—for example, a one time use coupon that has been redeemed. The default value is false.
   *
   * Available in iOS 7.0.
   */
  voided?: Maybe<Scalars['Boolean']>;
  /**
   * The URL of a web service that conforms to the API described in [PassKit Web Service Reference](https://developer.apple.com/library/archive/documentation/PassKit/Reference/PassKit_WebService/WebService.html#//apple_ref/doc/uid/TP40011988).
   *
   * The web service must use the HTTPS protocol; the leading https:// is included in the value of this key.
   *
   * On devices configured for development, there is UI in Settings to allow HTTP web services.
   */
  webServiceURL?: Maybe<Scalars['String']>;
};

export type PkBarcode = {
  __typename?: 'PKBarcode';
  /** Text displayed near the barcode. For example, a human-readable version of the barcode data in case the barcode doesn’t scan. */
  altText?: Maybe<Scalars['String']>;
  /** Barcode format. */
  format: PkBarcodeFormat;
  /** Message or payload to be displayed as a barcode. */
  message: Scalars['String'];
  /** Text encoding that is used to convert the message from the string representation to a data representation to render the barcode. The value is typically iso-8859-1, but you may use another encoding that is supported by your barcode scanning infrastructure. */
  messageEncoding: Scalars['String'];
};

export enum PkBarcodeFormat {
  Aztec = 'AZTEC',
  Code128 = 'CODE128',
  Pdf417 = 'PDF417',
  Qr = 'QR'
}

export type PkBeacon = {
  __typename?: 'PKBeacon';
  /** Major identifier of a Bluetooth Low Energy location beacon. */
  major?: Maybe<Scalars['Int']>;
  /** Minor identifier of a Bluetooth Low Energy location beacon. */
  minor?: Maybe<Scalars['Int']>;
  /** Unique identifier of a Bluetooth Low Energy location beacon. */
  proximityUUID: Scalars['String'];
  /** Text displayed on the lock screen when the pass is currently relevant. For example, a description of the nearby location such as “Store nearby on 1st and Main.” */
  relevantText?: Maybe<Scalars['String']>;
};

export enum PkDataDetectorType {
  Address = 'ADDRESS',
  CalendarEvent = 'CALENDAR_EVENT',
  Link = 'LINK',
  None = 'NONE',
  PhoneNumber = 'PHONE_NUMBER'
}

export enum PkDateStyle {
  Full = 'FULL',
  Long = 'LONG',
  Medium = 'MEDIUM',
  None = 'NONE',
  Short = 'SHORT'
}

export type PkFields = {
  __typename?: 'PKFields';
  /**
   * Attributed value of the field.
   *
   * The value may contain HTML markup for links. Only the `<a>` tag and its `href` attribute are supported. For example, the following is key-value pair specifies a link with the text “Edit my profile”:
   *
   * `"attributedValue": "<a href='http://example.com/customers/123'>Edit my profile</a>"`
   *
   * This key’s value overrides the text specified by the value key.
   *
   * Available in iOS 7.0.
   */
  attributedValue?: Maybe<Scalars['String']>;
  /**
   * Format string for the alert text that is displayed when the pass is updated. The format string must contain the escape %@, which is replaced with the field’s new value. For example, “Gate changed to %@.”
   *
   * If you don’t specify a change message, the user isn’t notified when the field changes.
   */
  changeMessage?: Maybe<Scalars['String']>;
  /** ISO 4217 currency code for the field’s value. */
  currencyCode?: Maybe<Scalars['String']>;
  /**
   * Data detectors that are applied to the field’s value.
   *
   * The default value is all data detectors. Provide an empty array to use no data detectors.
   *
   * Data detectors are applied only to back fields.
   */
  dataDetectorTypes?: Maybe<Array<Maybe<PkDataDetectorType>>>;
  /** Style of date to display. */
  dateStyle?: Maybe<PkDateStyle>;
  /**
   * Always display the time and date in the given time zone, not in the user’s current time zone. The default value is `false`.
   *
   * The format for a date and time always requires a time zone, even if it will be ignored. For backward compatibility with iOS 6, provide an appropriate time zone, so that the information is displayed meaningfully even without ignoring time zones.
   *
   * This key does not affect how relevance is calculated.
   *
   * Available in iOS 7.0.
   */
  ignoresTimeZone?: Maybe<Scalars['Boolean']>;
  /**
   *  If `true`, the label’s value is displayed as a relative date; otherwise, it is displayed as an absolute date. The default value is `false`.
   *
   * This key does not affect how relevance is calculated.
   */
  isRelative?: Maybe<Scalars['Boolean']>;
  /** The key must be unique within the scope of the entire pass. For example, “departure-gate.” */
  key: Scalars['String'];
  /** Label text for the field. */
  label?: Maybe<Scalars['String']>;
  /** Style of number to display. Number styles have the same meaning as the Cocoa number formatter styles with corresponding names. */
  numberStyle?: Maybe<PkNumberStyle>;
  /**
   * Alignment for the field’s contents.
   *
   * The default value is natural alignment, which aligns the text appropriately based on its script direction.
   *
   * This key is not allowed for primary fields or back fields.
   */
  textAlignment?: Maybe<PkTextAlignment>;
  /** Style of time to display. */
  timeStyle?: Maybe<PkDateStyle>;
  /** Value of the field, for example, `42`. */
  value: Scalars['String'];
};

export type PkLocation = {
  __typename?: 'PKLocation';
  /** Altitude, in meters, of the location. */
  altitude?: Maybe<Scalars['Float']>;
  /** Latitude, in degrees, of the location. */
  latitude: Scalars['Float'];
  /** Longitude, in degrees, of the location. */
  longitude: Scalars['Float'];
  /** Text displayed on the lock screen when the pass is currently relevant. For example, a description of the nearby location such as “Store nearby on 1st and Main.” */
  relevantText?: Maybe<Scalars['String']>;
};

export type Pknfc = {
  __typename?: 'PKNFC';
  /** The public encryption key used by the Value Added Services protocol. Use a Base64 encoded X.509 `SubjectPublicKeyInfo` structure containing a ECDH public key for group P256. */
  encryptionPublicKey?: Maybe<Scalars['String']>;
  /** The payload to be transmitted to the Apple Pay terminal. Must be 64 bytes or less. Messages longer than 64 bytes are truncated by the system. */
  message: Scalars['String'];
};

export enum PkNumberStyle {
  Decimal = 'DECIMAL',
  Percent = 'PERCENT',
  Scientific = 'SCIENTIFIC',
  SpellOut = 'SPELL_OUT'
}

export type PkPass = {
  __typename?: 'PKPass';
  /** Additional fields to be displayed on the front of the pass. */
  auxiliaryFields?: Maybe<Array<Maybe<PkFields>>>;
  /** Fields to be on the back of the pass. */
  backFields?: Maybe<Array<Maybe<PkFields>>>;
  /**
   * Fields to be displayed in the header on the front of the pass.
   *
   * Use header fields sparingly; unlike all other fields, they remain visible when a stack of passes are displayed.
   */
  headerFields?: Maybe<Array<Maybe<PkFields>>>;
  /** Fields to be displayed prominently on the front of the pass. */
  primaryFields?: Maybe<Array<Maybe<PkFields>>>;
  /** Fields to be displayed on the front of the pass. */
  secondaryFields?: Maybe<Array<Maybe<PkFields>>>;
  /** Required for boarding passes; otherwise not allowed. Type of transit. */
  transitType?: Maybe<PkTransitType>;
};

export enum PkTextAlignment {
  Center = 'CENTER',
  Left = 'LEFT',
  Natural = 'NATURAL',
  Right = 'RIGHT'
}

export enum PkTransitType {
  Air = 'AIR',
  Boat = 'BOAT',
  Bus = 'BUS',
  Generic = 'GENERIC',
  Train = 'TRAIN'
}

export type Project = {
  __typename?: 'Project';
  /** Project ID */
  id?: Maybe<Scalars['ProjectID']>;
  /** Project name */
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['UserID'];
};

export type ProjectAddInput = {
  /** Project name */
  name: Scalars['String'];
};

export type ProjectAddPayload = {
  __typename?: 'ProjectAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Project>;
  recordId?: Maybe<Scalars['ProjectID']>;
};

export type Query = {
  __typename?: 'Query';
  project: Project;
  projectCollection?: Maybe<Array<Maybe<Project>>>;
  task?: Maybe<Task>;
  taskCollection?: Maybe<Array<Maybe<Task>>>;
  user?: Maybe<User>;
  userCollection?: Maybe<Array<Maybe<User>>>;
  wallet?: Maybe<QueryWallet>;
};


export type QueryProjectArgs = {
  id: Scalars['ProjectID'];
};


export type QueryTaskArgs = {
  id: Scalars['TaskID'];
};


export type QueryTaskCollectionArgs = {
  filter?: InputMaybe<TaskFilter>;
  sort?: InputMaybe<TaskSort>;
};


export type QueryUserArgs = {
  id: Scalars['UserID'];
};

export type QueryWallet = {
  __typename?: 'QueryWallet';
  passCollection?: Maybe<Array<Maybe<WalletPass>>>;
};

export type Task = {
  __typename?: 'Task';
  dueDate?: Maybe<Scalars['DateTime']>;
  /** Task ID */
  id: Scalars['TaskID'];
  isCompleted: Scalars['Boolean'];
  isRemoved: Scalars['Boolean'];
  owner: User;
  ownerId: Scalars['UserID'];
  project: Project;
  projectId: Scalars['ProjectID'];
  title: Scalars['String'];
};

export type TaskAddInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  projectId: Scalars['ProjectID'];
  title: Scalars['String'];
};

export type TaskAddPayload = {
  __typename?: 'TaskAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export type TaskDeleteInput = {
  id: Scalars['TaskID'];
};

export type TaskDeletePayload = {
  __typename?: 'TaskDeletePayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export type TaskEditInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['TaskID'];
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaskEditPayload = {
  __typename?: 'TaskEditPayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordCollection?: Maybe<Array<Maybe<Task>>>;
  recordId?: Maybe<Scalars['TaskID']>;
  recordIdCollection?: Maybe<Array<Maybe<Scalars['TaskID']>>>;
};

export type TaskFilter = {
  dueDate?: InputMaybe<Scalars['Date']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<Scalars['ProjectID']>;
};

export type TaskRemoveInput = {
  id: Scalars['TaskID'];
};

export type TaskRemovePayload = {
  __typename?: 'TaskRemovePayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export enum TaskSort {
  DueDateAsc = 'DUE_DATE_ASC',
  DueDateDesc = 'DUE_DATE_DESC'
}

export type User = {
  __typename?: 'User';
  /** User ID */
  id: Scalars['UserID'];
};

export type UserSignUpInput = {
  /** User password */
  password: Scalars['UserPassword'];
  /** User username */
  username: Scalars['String'];
};

export type UserSignUpPayload = {
  __typename?: 'UserSignUpPayload';
  query?: Maybe<Query>;
  record?: Maybe<User>;
  recordId?: Maybe<Scalars['UserID']>;
};

export type WalletPass = {
  __typename?: 'WalletPass';
  createdAt: Scalars['DateTime'];
  id: Scalars['ObjectID'];
  owner: User;
  ownerId: Scalars['ObjectID'];
  passkitData: Pk;
  updatedAt: Scalars['DateTime'];
};

export type HtmlImageElementFieldsFragment = { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null };

export type PkBarcodeFieldsFragment = { __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string };

export type PkBeaconFieldsFragment = { __typename?: 'PKBeacon', major?: number | null, minor?: number | null, proximityUUID: string, relevantText?: string | null };

export type PkFieldsFieldsFragment = { __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null };

export type PkFieldsFragment = { __typename?: 'PK', description: string, formatVersion: number, organizationName: string, passTypeIdentifier: string, serialNumber: string, teamIdentifier: string, appLaunchURL?: string | null, associatedStoreIdentifiers?: Array<number | null> | null, userInfo?: any | null, expirationDate?: string | null, voided?: boolean | null, maxDistance?: number | null, relevantDate?: string | null, backgroundColor?: string | null, foregroundColor?: string | null, groupingIdentifier?: string | null, labelColor?: string | null, logoText?: string | null, suppressStripShine?: boolean | null, authenticationToken?: string | null, webServiceURL?: string | null, beacons?: Array<{ __typename?: 'PKBeacon', major?: number | null, minor?: number | null, proximityUUID: string, relevantText?: string | null } | null> | null, locations?: Array<{ __typename?: 'PKLocation', altitude?: number | null, latitude: number, longitude: number, relevantText?: string | null } | null> | null, boardingPass?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, coupon?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, eventTicket?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, generic?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, storeCard?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, barcode?: { __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null, barcodes?: Array<{ __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null> | null, nfc?: { __typename?: 'PKNFC', message: string, encryptionPublicKey?: string | null } | null, background?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, icon?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, logo?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, thumbnail?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null };

export type PkLocationFieldsFragment = { __typename?: 'PKLocation', altitude?: number | null, latitude: number, longitude: number, relevantText?: string | null };

export type PknfcFieldsFragment = { __typename?: 'PKNFC', message: string, encryptionPublicKey?: string | null };

export type PkPassFieldsFragment = { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null };

export type WalletPassFieldsFragment = { __typename?: 'WalletPass', id: any, passkitData: { __typename?: 'PK', description: string, formatVersion: number, organizationName: string, passTypeIdentifier: string, serialNumber: string, teamIdentifier: string, appLaunchURL?: string | null, associatedStoreIdentifiers?: Array<number | null> | null, userInfo?: any | null, expirationDate?: string | null, voided?: boolean | null, maxDistance?: number | null, relevantDate?: string | null, backgroundColor?: string | null, foregroundColor?: string | null, groupingIdentifier?: string | null, labelColor?: string | null, logoText?: string | null, suppressStripShine?: boolean | null, authenticationToken?: string | null, webServiceURL?: string | null, beacons?: Array<{ __typename?: 'PKBeacon', major?: number | null, minor?: number | null, proximityUUID: string, relevantText?: string | null } | null> | null, locations?: Array<{ __typename?: 'PKLocation', altitude?: number | null, latitude: number, longitude: number, relevantText?: string | null } | null> | null, boardingPass?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, coupon?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, eventTicket?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, generic?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, storeCard?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, barcode?: { __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null, barcodes?: Array<{ __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null> | null, nfc?: { __typename?: 'PKNFC', message: string, encryptionPublicKey?: string | null } | null, background?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, icon?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, logo?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, thumbnail?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null } };

export type WalletQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletQuery = { __typename?: 'Query', wallet?: { __typename?: 'QueryWallet', passCollection?: Array<{ __typename?: 'WalletPass', id: any, passkitData: { __typename?: 'PK', description: string, formatVersion: number, organizationName: string, passTypeIdentifier: string, serialNumber: string, teamIdentifier: string, appLaunchURL?: string | null, associatedStoreIdentifiers?: Array<number | null> | null, userInfo?: any | null, expirationDate?: string | null, voided?: boolean | null, maxDistance?: number | null, relevantDate?: string | null, backgroundColor?: string | null, foregroundColor?: string | null, groupingIdentifier?: string | null, labelColor?: string | null, logoText?: string | null, suppressStripShine?: boolean | null, authenticationToken?: string | null, webServiceURL?: string | null, beacons?: Array<{ __typename?: 'PKBeacon', major?: number | null, minor?: number | null, proximityUUID: string, relevantText?: string | null } | null> | null, locations?: Array<{ __typename?: 'PKLocation', altitude?: number | null, latitude: number, longitude: number, relevantText?: string | null } | null> | null, boardingPass?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, coupon?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, eventTicket?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, generic?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, storeCard?: { __typename?: 'PKPass', transitType?: PkTransitType | null, auxiliaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, backFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, headerFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, primaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null, secondaryFields?: Array<{ __typename?: 'PKFields', attributedValue?: string | null, changeMessage?: string | null, dataDetectorTypes?: Array<PkDataDetectorType | null> | null, key: string, label?: string | null, textAlignment?: PkTextAlignment | null, value: string, dateStyle?: PkDateStyle | null, ignoresTimeZone?: boolean | null, isRelative?: boolean | null, timeStyle?: PkDateStyle | null, currencyCode?: string | null, numberStyle?: PkNumberStyle | null } | null> | null } | null, barcode?: { __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null, barcodes?: Array<{ __typename?: 'PKBarcode', altText?: string | null, format: PkBarcodeFormat, message: string, messageEncoding: string } | null> | null, nfc?: { __typename?: 'PKNFC', message: string, encryptionPublicKey?: string | null } | null, background?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, icon?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, logo?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null, thumbnail?: { __typename?: 'HTMLImageElement', srcset?: string | null, imageset?: string | null } | null } } | null> | null } | null };

export const PkBeaconFieldsFragmentDoc = gql`
    fragment PKBeaconFields on PKBeacon {
  major
  minor
  proximityUUID
  relevantText
}
    `;
export const PkLocationFieldsFragmentDoc = gql`
    fragment PKLocationFields on PKLocation {
  altitude
  latitude
  longitude
  relevantText
}
    `;
export const PkFieldsFieldsFragmentDoc = gql`
    fragment PKFieldsFields on PKFields {
  attributedValue
  changeMessage
  dataDetectorTypes
  key
  label
  textAlignment
  value
  dateStyle
  ignoresTimeZone
  isRelative
  timeStyle
  currencyCode
  numberStyle
}
    `;
export const PkPassFieldsFragmentDoc = gql`
    fragment PKPassFields on PKPass {
  auxiliaryFields {
    ...PKFieldsFields
  }
  backFields {
    ...PKFieldsFields
  }
  headerFields {
    ...PKFieldsFields
  }
  primaryFields {
    ...PKFieldsFields
  }
  secondaryFields {
    ...PKFieldsFields
  }
  transitType
}
    ${PkFieldsFieldsFragmentDoc}`;
export const PkBarcodeFieldsFragmentDoc = gql`
    fragment PKBarcodeFields on PKBarcode {
  altText
  format
  message
  messageEncoding
}
    `;
export const PknfcFieldsFragmentDoc = gql`
    fragment PKNFCFields on PKNFC {
  message
  encryptionPublicKey
}
    `;
export const HtmlImageElementFieldsFragmentDoc = gql`
    fragment HTMLImageElementFields on HTMLImageElement {
  srcset
  imageset
}
    `;
export const PkFieldsFragmentDoc = gql`
    fragment PKFields on PK {
  description
  formatVersion
  organizationName
  passTypeIdentifier
  serialNumber
  teamIdentifier
  appLaunchURL
  associatedStoreIdentifiers
  userInfo
  expirationDate
  voided
  beacons {
    ...PKBeaconFields
  }
  locations {
    ...PKLocationFields
  }
  maxDistance
  relevantDate
  boardingPass {
    ...PKPassFields
  }
  coupon {
    ...PKPassFields
  }
  eventTicket {
    ...PKPassFields
  }
  generic {
    ...PKPassFields
  }
  storeCard {
    ...PKPassFields
  }
  barcode {
    ...PKBarcodeFields
  }
  barcodes {
    ...PKBarcodeFields
  }
  backgroundColor
  foregroundColor
  groupingIdentifier
  labelColor
  logoText
  suppressStripShine
  authenticationToken
  webServiceURL
  nfc {
    ...PKNFCFields
  }
  background {
    ...HTMLImageElementFields
  }
  icon {
    ...HTMLImageElementFields
  }
  logo {
    ...HTMLImageElementFields
  }
  thumbnail {
    ...HTMLImageElementFields
  }
}
    ${PkBeaconFieldsFragmentDoc}
${PkLocationFieldsFragmentDoc}
${PkPassFieldsFragmentDoc}
${PkBarcodeFieldsFragmentDoc}
${PknfcFieldsFragmentDoc}
${HtmlImageElementFieldsFragmentDoc}`;
export const WalletPassFieldsFragmentDoc = gql`
    fragment WalletPassFields on WalletPass {
  id
  passkitData {
    ...PKFields
  }
}
    ${PkFieldsFragmentDoc}`;
export const WalletDocument = gql`
    query Wallet {
  wallet {
    passCollection {
      ...WalletPassFields
    }
  }
}
    ${WalletPassFieldsFragmentDoc}`;

/**
 * __useWalletQuery__
 *
 * To run a query within a React component, call `useWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useWalletQuery(baseOptions?: Apollo.QueryHookOptions<WalletQuery, WalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options);
      }
export function useWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletQuery, WalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options);
        }
export type WalletQueryHookResult = ReturnType<typeof useWalletQuery>;
export type WalletLazyQueryHookResult = ReturnType<typeof useWalletLazyQuery>;
export type WalletQueryResult = Apollo.QueryResult<WalletQuery, WalletQueryVariables>;
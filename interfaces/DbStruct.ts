export interface DbUrl {
  _id: ID;
  slug: string;
  url: string;
  createdAt: string;
}

export interface ID {
  $oid: string;
}

import * as crypto from "node:crypto";
import realImplementation from "../generateId";
const generateId: typeof realImplementation = () => {
  return crypto.randomUUID();
};

export default generateId;

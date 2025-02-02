import { File } from "@web-std/file";

export class HonoStorageFile extends File {
  constructor(file: Blob | File) {
    super([file], file.name);
  }

  get originalname(): string {
    const name = this.name;
    const lastDot = name.lastIndexOf(".");
    if (lastDot === -1) {
      return name;
    }
    return name.substring(0, lastDot);
  }

  get extension(): string {
    const name = this.name;
    const lastDot = name.lastIndexOf(".");
    if (lastDot === -1) {
      return "";
    }
    return name.substring(lastDot + 1);
  }
}

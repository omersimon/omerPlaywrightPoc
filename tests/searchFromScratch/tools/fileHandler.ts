import fs from "fs";

async  writeObjectToJsonFile (objectToWrite: object, filePath: string) {
    const resultJson = JSON.stringify(objectToWrite);
    fs.writeFileSync(filePath, resultJson);
    console.log(`JSON written to ${filePath}:`, resultJson);
}

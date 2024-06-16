import * as fs from 'fs';
import * as path from 'path';

const schemaPath = path.resolve(__dirname, '../../public/swml.schema.json'); // Adjust the path to your JSON schema file

// Read the JSON schema file
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Function to modify the schema
function modifySchema(schema: any) {
    if (schema.definitions && schema.definitions.MethodUnion) {
        const methodUnion = schema.definitions.MethodUnion;

        if (methodUnion.anyOf && Array.isArray(methodUnion.anyOf)) {
            methodUnion.anyOf.forEach((item: any) => {
                if (item.enum && Array.isArray(item.enum)) {
                    // Append an empty object to the enum array
                    item.enum.push({});
                }
            });
        }
    }
}

// Modify the schema
modifySchema(schema);

// Write the modified schema back to the file
fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2), 'utf8');

console.log('Schema modified successfully');

import fs from 'fs';

import updateClassName from '../../../lib/update-class-name';

const updateComponentClassName = ({ method, body }, res) => {
  if (method !== 'POST') {
    return null;
  }

  const { lineNumber, columnNumber, className, fileName } = body;

  const code = fs.readFileSync(fileName, 'utf8');

  const newCode = updateClassName({
    code,
    className,
    lineNumber: parseInt(lineNumber),
    columnNumber: parseInt(columnNumber),
  });

  if (code !== newCode) {
    fs.writeFileSync(fileName, newCode);
  }

  res.statusCode = 200;
  res.json({ code: JSON.stringify(code) });
};

export default updateComponentClassName;

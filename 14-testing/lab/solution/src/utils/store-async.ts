export default function store(value: Buffer) {
  return new Promise((resolve, reject) => {
    if (!Buffer.isBuffer(value)) {
      reject(new Error("input must be a buffer"));
    } else {
      setTimeout(() => {
        const id = Math.random().toString(36).split(".")[1].slice(0, 4);
        resolve({ id });
      }, 300);
    }
  });
}

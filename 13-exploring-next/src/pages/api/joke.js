export default function handler(req, res) {
  try {
    throw new Error("whoops");
    res.status(200).send({
      Question: "What do you get hanging from trees?",
      Answer: "Sore arms",
    });
  } catch (error) {
    res.status(400).json({ error: "It wasn't funny" });
  }
}

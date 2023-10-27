export default async function handler(req, res) {
    try {
      const data = await res.revalidate(`/solutions/rfid-connect`);
      res.json({
        revalidated: true,
      });
    } catch (error) {
      console.log("errorr========>", error);
    }
  }
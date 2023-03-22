// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Invertocat 2.0 Shirt",
      price: 28,
      image: "http://localhost:3000/img/invertocat20.webp",
      description:
        "Invertocat has come for your closet with this cozy tee. Made from a cotton, jersey, and poly blend, it's super soft with just the right amount of stretch. Pair it with your favorite jeans for the perfect work uniform.",
    },
    {
      id: 1,
      title: "Sticker Pack",
      price: 5,
      image: "http://localhost:3000/img/stickerpack.webp",
      description:
        "*Pssst* Yeah, you over there. That one sticker on your laptop is looking mighty lonely. Â Check out these sticker packs with some of our most loved stickers.",
    },
    {
      id: 2,
      title: "Invertocat Hoodie",
      price: 200,
      image: "http://localhost:3000/img/invertocat.webp",
      description:
        "This hoodie featuring Invertocat screen-prints is going to be an instant classic. Just zip it up over your favorite tee and you'll be out the door (or on the couch, if you want).",
    },
    {
      id: 3,
      title: "Invertocat Mug",
      price: 18,
      image: "http://localhost:3000/img/mug.webp",
      description:
        "Sport your GitHub pride with every sip, thanks to this stoneware mug that features our very own Invertocat with an attractive matte finish.",
    },
    {
      id: 4,
      title: "Hat",
      price: 21,
      image: "http://localhost:3000/img/hat.webp",
      description:
      "For sunny days (or bad hair days), pick up this Invertocat-embossed baseball cap. With an adjustable tuck-away leather back strap and grommet hook-and-loop closure, it offers a personalized, extra-comfortable fit.",
    },
    {
      id: 5,
      title: "All Purpose Tote",
      price: 13,
      image: "http://localhost:3000/img/tote.webp",
      description:
      "Made from all renewable material, this PVC-free tote is an eco-conscious update on your favorite shopping bag.",
    },
  ]);
}

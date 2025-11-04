import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
    console.log("multer file", file);
  },
});

console.log(storage);
// console.log("multer", multer({ storage }));
export const upload = multer({ storage });

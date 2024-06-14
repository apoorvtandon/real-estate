import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1718364373~exp=1718367973~hmac=4a526be130b9062b127ed4194f95d062e9e794becfa4a9d24767386378071d53&w=740",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;

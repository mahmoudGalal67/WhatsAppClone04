export default function Avatar({ src }) {
  return (
    <img
      src={src || "https://i.pravatar.cc/150"}
      className="w-10 h-10 rounded-full object-cover"
      alt="avatar"
    />
  );
}

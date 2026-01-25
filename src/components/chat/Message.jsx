export default function Message({ message }) {
  return (
    <div
      className={`max-w-[45%] w-fit px-3 h-8 rounded-lg text-sm relative flex items-center gap-4 word-break break-words break-all h-fit text-left
      ${message.fromMe ? "ml-auto bg-[#005c4b]" : "bg-[#202c33]"}`}
    >
      {message.text}
      <span className="block text-[10px] text-gray-300 text-right mt-3 items-end">
        {message.time}
      </span>
    </div>
  );
}

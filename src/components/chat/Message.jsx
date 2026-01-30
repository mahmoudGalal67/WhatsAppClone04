export default function Message({ message }) {
  return (
    <div
      className={`max-w-[45%] w-fit px-2 h-8 rounded-lg text-sm relative flex flex-col items-center  word-break break-words break-all h-fit text-left
      ${message.fromMe ? "ml-auto bg-[#005c4b]" : "bg-[#202c33]"}`}
    >
      {message.text && <p>{message.text}</p>}
      {/* IMAGE MESSAGE */}
      {message.image && (
        <img
          src={message.image}
          className="rounded-lg max-h-60 object-cover"
        />
      )}
      <span className="block text-[10px] text-gray-300 text-right mt-1 items-end  w-full">
        {message.time}
      </span>
    </div>
  );
}

import React from 'react'
import { useState } from 'react';
const Chat1 = () => {
    const chats = [
        { id: 1, name: "John", avatar: "" },
        { id: 2, name: "Mudasser", avatar: "" },
        { id: 3, name: "Bob", avatar: "" },
        { id: 5, name: "Ahsan", avatar: "" },
        { id: 6, name: "ali", avatar: "" },
        { id: 7, name: "Elon musk", avatar: "" },
        { id: 8, name: "Alice", avatar: "" },
        { id: 9, name: "mubashir", avatar: "" },
        { id: 10, name: "nouman", avatar: "" },
        { id: 11, name: "waheed", avatar: "" },
        { id: 12, name: "mohammad", avatar: "" },
        { id: 13, name: "suleman", avatar: "" },
      ];
      const [activeChat, setActiveChat] = useState(1);
      const [messages, setMessages] = useState({
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
      });
      const [showSidebar, setShowSidebar] = useState(false);
      const [recieved, setRecieved] = useState([]);
      const [inputValue, setInputValue] = useState("");
      const [filteredChats, setFilteredChats] = useState(chats);
    
      const handleSend = (e) => {
        e.preventDefault();
        const message = e.target.elements.message.value.trim();
        if (message !== "") {
          setMessages((prevState) => ({
            ...prevState,
            [activeChat]: [...prevState[activeChat], message],
          }));
          e.target.reset();
        }
      };
      const handleDelete = () => {
        setMessages({
          ...messages,
          [activeChat]: [],
        });
        setRecieved([]);
      };
      const handleReceive = () => {
        const newMessage = { message: "This is a received message" };
        setRecieved([...recieved, newMessage]);
      };
      const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        const filteredList = chats.filter((chat) =>
          chat.name.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredChats(filteredList);
      };
  return (
    <main>
    
    <div className="flex  h-[85vh] mt-3 bg-gray-200  ">
      {/*TOGGLE SIDEBAR*/}
      <div className="md:hidden">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showSidebar ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}

      <div
        id="chat"
        className={`flex flex-col  w-64 bg-white border-r ${
          showSidebar ? "" : "hidden"
        } md:block md:overflow-auto `}
      >
        <div>
          <div className="relative my-3 w-52 mx-5 ">
            <input
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              type="text"
              className="bg-gray-100 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:border-gray-300 pl-8 pr-3 py-2 w-full"
              placeholder="Search..."
            />
            <svg
              className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.873-4.873"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          {/* <SearchFilter
            className="mb-3 "
            value={inputValue}
            onChangeFields={(e) => handleInputChange(e)}
            //options
            option={[
              { item: "id", value: "id" },
              { item: "name", value: "name" },
              { item: "active", value: "active" },
              { item: "description", value: "description" },
            ]}
            // onChangeOption={(e) => {
            //   setoption(e.target.value);
            // }}
            // optionValue={option}
            //operation
            operation={[
              { item: "is", value: "$eqi" },
              { item: "containsi", value: "$containsi" },
              { item: "is not null", value: "$ne" },
            ]}
          /> */}
        </div>
        <div className=" flex items-center justify-between h-16 px-4 border-b ">
          <h1 className="text-xl font-bold">Chats</h1>
        </div>
        <div
          className="flex-grow overflow-y-scroll h-[100%] max-w-full"
          id="chat"
        >
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setActiveChat(chat.id);
                setShowSidebar(false);
              }}
              className={`flex items-center justify-between border border-gray-200 hover:bg-slate-100 h-16 px-4 cursor-pointer ${
                activeChat === chat.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex items-center">
                {chat.avatar ? (
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={chat.avatar}
                    alt={`${chat.name}'s avatar`}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-400 mr-4 flex items-center justify-center ">
                    {" "}
                    AV{" "}
                  </div>
                )}
                <p className="font-sm">{chat.name || "Placeholder Name"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}

      <div
        className={`flex flex-col flex-grow   flex-1 flex-col-reverse overflow-y-auto ${
          showSidebar ? "hidden" : ""
        }  `}
      >
        <div className="bg-[#EFEAE2] pb-4 ">
          <button
            type="submit"
            onClick={handleReceive}
            className="flex-shrink-0 px-4 py-2 ml-4 w-28 text-white bg-[#134E4A] rounded-lg  focus:outline-none "
          >
            receive
          </button>
          <button
            type="delete"
            onClick={() => handleDelete()}
            className="flex-shrink-0 px-4 py-2 ml-4 text-white bg-red-500 rounded-lg  focus:outline-none hover:opacity-70"
          >
            clear
          </button>
        </div>
        <form
          onSubmit={handleSend}
          className="flex items-center bg-[#EFEAE2] py-3 px-4"
        >
          <div className="flex-grow ">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <input
              type="text"
              name="message"
              id="message"
              className="block w-full  outline-none py-2 px-4 border-gray-100  rounded-lg focus:outline-none "
              placeholder="Type your message here"
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 px-4 py-2 ml-4  hover:text-slate-500 bg-slate-100 rounded-lg  focus:outline-none "
          >
            <i className="fa fa-paper-plane fa-xl"></i>
          </button>
        </form>
        <div
          className="flex-grow bg-[#EFEAE2] overflow-y-auto  p-4"
          id="chat"
        >
          <ul className="mt-4 flex flex-col space-y-2 justify-end">
            {messages[activeChat]?.map((message, index) => (
              <div
                key={index}
                className="flex space-x-2  items-start justify-end"
              >
                <div className="bg-[#D9FDD3] p-3 rounded-lg max-w-auto min-w-min">
                  <div className="text-sm whitespace-nowrap ">
                    {message.match(/.{1,40}/g).map((chunk, index) => (
                      <span key={index}>
                        {chunk}
                        <br />
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 float-right">
                    {new Date().toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </ul>
          <ul className="mt-1">
            {recieved?.map((item, index) => (
              <>
                <div key={index} className="flex space-x-2 items-start ">
                  <div className="bg-white p-3 rounded-lg max-w-sm">
                    <div className="text-sm whitespace-wrap">
                      {item?.message}
                    </div>
                    <span className="text-xs text-gray-400 ">
                      {new Date().toLocaleString()}
                    </span>
                  </div>
                </div>
                <br />
              </>
            ))}
          </ul>
        </div>
        <div className="flex flex-shrink-0 px-4 py-4 bg-[#F0F2F5]  border-t order-last ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full mx-3"
          />
          <h1 className="text-lg mt-1">
            Chat with {chats.find((chat) => chat.id === activeChat).name}{" "}
            <span className="text-green-500">●</span>
          </h1>
          {/* <div className="w-2 h-2 rounded-full bg-green-500"></div> */}
        </div>
      </div>
    </div>
  </main>
  )
}

export default Chat1
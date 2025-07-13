import { useRef, useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const Homepage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputValue(file.name);
    }
  };

  // Auto-resize textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        What's on your mind today?
      </h1>

      <div className="relative w-full max-w-2xl bg-[#2c2c2c] rounded-2xl border-none">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask anything"
          className="w-full px-5 py-3 pr-16 rounded-xl border-none resize-none outline-none focus:ring-0 text-white"
          rows={1}
        />

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                aria-label="Add"
                className="rounded-full h-8 w-8 p-0 hover:bg-[#4b4b4b] bg-[#2c2c2c]"
              >
                <Plus size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2 rounded-md shadow-xl w-60 space-y-1 bg-[#4b4b4b]">
              <Button
                variant="ghost"
                className="w-full justify-between text-left px-3 py-2 text-sm hover:text-white hover:bg-[#6b6b6b]"
                onClick={handleFileClick}
              >
                Add photos & files
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

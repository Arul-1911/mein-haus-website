"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, PenIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";

function ProfilePic() {
  const [showBtn, setShowBtn] = useState(false);
  const [image, setImage] = useState("");

  const handleRemoveImg = () => {
    if (!image) return;
    setImage("");
    setShowBtn(true);
  };

  const handleUploadImg = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImage(url);
    setShowBtn(true);
  };

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  return (
    <main>
      {/* Hidden input */}
      <input
        type="file"
        id="file-input"
        hidden
        accept="image/*"
        onChange={(e) => handleUploadImg(e.target.files?.[0])}
      />

      <div className="relative">
        <Avatar className="w-30 h-30 object-cover">
          <AvatarImage
            src={
              image ||
              "https://sites.duke.edu/dek23/wp-content/themes/koji/assets/images/default-fallback-image.png"
            }
          />
          <AvatarFallback>No Img</AvatarFallback>
        </Avatar>

        <div className="absolute right-1 bottom-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-primary p-2 rounded-full">
                <Pencil className="text-white" size={18} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-3 mt-2 text-lg" align="center">
              <DropdownMenuGroup className="text-center text-[#545454]">
                {/* Trigger the hidden file input */}
                <DropdownMenuItem
                  onClick={() => document.getElementById("file-input").click()}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 font-medium">
                    <PenIcon />
                    <p>Edit Profile Photo</p>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <button onClick={handleRemoveImg}>
                    <div className="flex items-center gap-2 font-medium text-red-600">
                      <Trash className="text-red-600" />
                      <p>Delete Photo</p>
                    </div>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <h2 className="text-center my-2 text-xl font-semibold">John Doe</h2>

      {showBtn && <Button>Save Changes</Button>}
    </main>
  );
}

export default ProfilePic;

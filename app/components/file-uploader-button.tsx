import { Button } from "./button";
import {
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { FileUploader } from "./file-uploader";

export function FileUploaderButton() {
  return (
    <DialogTrigger>
      <Button variant="outline">Upload</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upload files</DialogTitle>
            <DialogDescription>
              Drag and drop your files here or click to browse.
            </DialogDescription>
          </DialogHeader>

          <FileUploader
            accept={undefined}
            multiple
            maxFiles={Infinity}
            maxSize={undefined}
          />
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  );
}

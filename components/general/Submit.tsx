"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button className="w-fit " type="submit" disabled={pending}>
        {pending ? "submitting" : "Submit"}
      </Button>
    </div>
  );
}

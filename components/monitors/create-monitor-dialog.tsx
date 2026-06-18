"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createMonitor } from "@/lib/create-monitor";

type Props = {
  onCreated?: () => void;
};

export function CreateMonitorDialog({ onCreated }: Props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState(60);
  const [expectedStatus, setExpectedStatus] = useState(200);

  async function handleSubmit() {
    await createMonitor({
      name,
      url,
      interval,
      expectedStatus,
    });

    setName("");
    setUrl("");
    setInterval(60);
    setExpectedStatus(200);

    onCreated?.(); // 🔥 sincroniza com a página
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Monitor</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Monitor</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <Input
            type="number"
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
          />

          <Input
            type="number"
            value={expectedStatus}
            onChange={(e) =>
              setExpectedStatus(Number(e.target.value))
            }
          />

          <Button className="w-full" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
import React from "react";
import { useToast } from "system";
import { Button } from "../../button";
import { Stack } from "../../stack";

export default {
  title: "Components/Base/Toast",
};

export const Toast = () => {
  const { toast } = useToast();

  return (
    <Stack>
      <Button onClick={() => toast("Success Details")}>Default toast</Button>
      <Button onClick={() => toast("info", "info")}>Info toast</Button>
      <Button onClick={() => toast("success", "success")}>Success toast</Button>
      <Button onClick={() => toast("warning", "warning")}>Warning toast</Button>
      <Button onClick={() => toast("error", "error")}>Error toast</Button>
    </Stack>
  );
};

Toast.args = {
  children: "Hello world",
};

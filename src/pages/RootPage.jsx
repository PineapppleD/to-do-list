import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const navigate = useNavigate();
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/registration");
    } else {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return null;
}

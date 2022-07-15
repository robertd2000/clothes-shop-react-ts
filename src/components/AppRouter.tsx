import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import { routes } from "../router";

export const AppRouter = () => {
  return (
    <Container style={{ marginTop: "5%" }}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Container>
  );
};

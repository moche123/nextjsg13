import { Route } from "@/models/routes.model";
import Link from "next/link";
import React from "react";

interface INavigatorProps {
  paths: Route[];
}

function Navigator(props: INavigatorProps) {
  return (
    <div className="flex gap-4 flex-rows">
      {props.paths.map((path) => (
        <Link key={path.url} href={path.url}>
          {path.label}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;

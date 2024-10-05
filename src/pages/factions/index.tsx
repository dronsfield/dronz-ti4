import React from "react";
import { convertNameToAppPath, factionNames } from "@/lib/factions";

const Page = () => {
  return (
    <div>
      <h1>Factions</h1>
      <ul>
        {factionNames.map((name) => {
          return (
            <li>
              <a href={`/factions/${convertNameToAppPath(name)}`}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;

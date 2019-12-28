import React from "react";
import ContentLoader from "react-content-loader";

import { Table, Tr } from "./styles";

const ListContentLoader = ({ rows }) => (
  <Table>
    <thead>
      <tr>
        <th>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="43" rx="15" ry="15" width="150" height="30" />
          </ContentLoader>
        </th>
        {/* <th>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="43" rx="15" ry="15" width="150" height="30" />
          </ContentLoader>
        </th> */}
        <th>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="43" rx="15" ry="15" width="120" height="30" />
          </ContentLoader>
        </th>
        <th>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="43" rx="15" ry="15" width="120" height="30" />
          </ContentLoader>
        </th>
        <th>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="43" rx="15" ry="15" width="200" height="30" />
          </ContentLoader>
        </th>
      </tr>
    </thead>
    <tbody>
      <Tr>
        <td>
          <ContentLoader
            height={50}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="15" rx="15" ry="15" width="480" height="30" />
          </ContentLoader>
        </td>
        {/* <td>
          <ContentLoader
            height={50}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="15" rx="15" ry="15" width="480" height="30" />
          </ContentLoader>
        </td> */}
        <td>
          <ContentLoader
            height={80}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="1" rx="12" ry="12" width="300" height="30" />
            <rect y="40" rx="12" ry="12" width="300" height="30" />
          </ContentLoader>
        </td>
        <td>
          <ContentLoader
            height={50}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="15" rx="15" ry="20" width="200" height="30" />
          </ContentLoader>
        </td>
        <td className="acctions">
          <ContentLoader
            height={50}
            width={500}
            speed={0.8}
            primaryColor={"#333"}
            secondaryColor={"#666"}
          >
            <rect y="15" rx="15" ry="20" width="140" height="30" />
            <rect y="15" x="150" rx="15" ry="20" width="140" height="30" />
          </ContentLoader>
        </td>
      </Tr>
    </tbody>
  </Table>
);

export default ListContentLoader;

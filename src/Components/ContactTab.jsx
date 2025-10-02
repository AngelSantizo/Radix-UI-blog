import {
  Flex,
  DataList,
  Badge,
  Code,
  IconButton,
  Link, // <-- Added Link component
} from "@radix-ui/themes";

const CopyIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 2C4.44772 2 4 2.44772 4 3V10C4 10.5523 4.44772 11 5 11H12C12.5523 11 13 10.5523 13 10V3C13 2.44772 12.5523 2 12 2H5ZM5 3H12V10H5V3ZM3 12C2.44772 12 2 11.5523 2 11V4H3V11H10V12H3Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function ContactTab() {
  // <-- Fixed component function syntax
  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            Available
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Phone</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">+502 4749-1605</Code>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="gray"
              variant="ghost"
            >
              <CopyIcon /> {/* <-- Now uses the defined or imported icon */}
            </IconButton>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Email</DataList.Label>
        <DataList.Value>
          <Link href="mailto:vlad@workos.com">aangelsanti12@gmail.com</Link>{" "}
          {/* <-- Link is now imported */}
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}

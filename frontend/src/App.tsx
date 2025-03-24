import { Stack, Text } from '@mantine/core';

// This is a test page for the reporteditor plugin.
// This page is *not* part of the plugin itself, but is used to test the plugin.
export default function App() {

  return (
    <>
    <Stack gap="xs">
      <Text size="lg">
        Welcome to the reporteditor plugin!
      </Text>
      <Text>
        This is a test page for the report-editor plugin.
      </Text>
      <Text>
        This page is not distributed as part of the plugin code, but is used to test the plugin.
      </Text>
    </Stack>
    </>
  );
}

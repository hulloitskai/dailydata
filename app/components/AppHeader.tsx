import { AppShell, type AppShellHeaderProps /*, Image */ } from "@mantine/core";

// import logoSrc from "~/assets/images/logo.png";
import AppMenu from "./AppMenu";

import classes from "./AppHeader.module.css";

export interface AppHeaderProps extends Omit<AppShellHeaderProps, "children"> {
  logoHref?: string;
}

const AppHeader = forwardRef<HTMLDivElement, AppHeaderProps>(
  ({ className, logoHref, ...otherProps }, ref) => (
    <AppShell.Header
      {...{ ref }}
      px={8}
      className={cn("AppHeader", classes.header, className)}
      {...otherProps}
    >
      <Group justify="space-between" gap={8} h="100%">
        <Group gap={4}>
          <Button
            component={Link}
            href={logoHref ?? routes.landing.show.path()}
            variant="subtle"
            size="compact-md"
            leftSection="🗞️"
            // leftSection={<Image src={logoSrc} h={24} w="unset" />}
            className={classes.logoButton}
          >
            {APP_NAME}
          </Button>
        </Group>
        <AppMenu className={classes.menu} />
      </Group>
    </AppShell.Header>
  ),
);

export default AppHeader;

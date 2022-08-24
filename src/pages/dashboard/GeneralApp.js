// @mui
import { Grid, Container, Stack } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppContacts,
  AppWidgetSummary,
  AppQuickTransfer,
  AppBalanceStatistics,
  AppRecentTransitions,
  AppExpensesCategories,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <AppWidgetSummary
                title="Income"
                icon={'eva:diagonal-arrow-left-down-fill'}
                percent={2.6}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
              <AppWidgetSummary
                title="Expenses"
                color="warning"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={-0.5}
                total={8938}
                chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
              />
               <AppWidgetSummary
                title="Profit"
                color="success"
                icon={'eva:diagonal-arrow-right-up-fill'}
                percent={2.5}
                total={18765}
                chartData={[111, 136, 76, 108, 74, 54, 57, 200]}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <AppBalanceStatistics />
              <AppExpensesCategories />
              <AppRecentTransitions />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <AppQuickTransfer />
              <AppContacts />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://localhost:3000/`;

test('New Test', async t => {
    await t
        .click(Selector('[class^="MuiNativeSelect-root MuiNativeSelect-select MuiInp"]'))
        .click(Selector('option').withText('Malaysia'))
        .click(Selector('.App_container__3sOU6'))
        .click(Selector('.chartjs-render-monitor'))
        .click(Selector('.chartjs-render-monitor'))
        .click(Selector('[class^="MuiNativeSelect-root MuiNativeSelect-select MuiInp"]'))
        .click(Selector('option').withText('Global'))
        .click(Selector('.chartjs-render-monitor'))
        .click(Selector('.chartjs-render-monitor'))
        .click(Selector('.chartjs-render-monitor'))
        .click(Selector('.chartjs-render-monitor'));
});
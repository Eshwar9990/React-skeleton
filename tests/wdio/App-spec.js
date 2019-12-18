describe('App Component', () => {
  it('Default View', () => {
    browser.url('/#/raw/tests/patient-attendance-js/attendance-type-view');
    browser.checkViewport({ viewports });

    expect(browser.isExisting('#PATIENT_ATTENDANCE_TYPE_GRID')).to.equal(true);
    expect(browser.isVisible('#PATIENT_ATTENDANCE_TYPE_GRID')).to.equal(true);
  });
});

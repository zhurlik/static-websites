describe('Mobile web site', () => {

    it('about.html page is loading', async () => {
        await browser.url(`http://localhost:8081/about.html`);

        await expect($('#about_image')).toBeExisting();
        await expect($('#about_text')).toHaveTextContaining(
            'Loading Mobile About page...');
    });
});


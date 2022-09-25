describe('Desktop web site', () => {
    it('verify the text that index.html page is loading', async () => {
        await browser.url(`http://localhost:8081/index.html`);
        const title = await browser.getTitle();
        expect(title).toEqual('Desktop Index page');

        await expect($('body')).toHaveTextContaining('Loading Desktop Index page...');
    });

    it('verify index.html page after 2 seconds', async () => {
        await browser.url(`http://localhost:8081/index.html`);
        const title = await browser.getTitle();
        expect(title).toEqual('Desktop Index page');

        await browser.pause(2000); // there is a logic on the page
        await expect($('body')).toHaveTextContaining('Hello Desktop!!!');
    });

    it('verify the text that about.html page is loading', async () => {
        await browser.url(`http://localhost:8081/about.html`);
        const title = await browser.getTitle();
        expect(title).toEqual('Desktop About page');

        const image = await $('#about_image');
        expect(image).toBeExisting();
        expect(image).not.toBeDisplayed();

        await expect($('#about_text')).toHaveTextContaining(
            'Loading Desktop About page...');
    });

    it('verify about.html page after 2 seconds', async () => {
        await browser.url(`http://localhost:8081/about.html`);
        const title = await browser.getTitle();
        expect(title).toEqual('Desktop About page');

        await browser.pause(2000); // there is a logic on the page

        const image = $('#about_image');
        expect(image).toBeExisting();
        expect(image).toBeDisplayed();

        await expect($('#about_text')).toHaveTextContaining(
            'Desktop About page!!!');
    });
});


import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-columns";

const content = html`
    <ilw-columns>
        <div class="test"><h3>Column 1</h3><p>Consectetur adipiscing elit. <div>Donec posuere dui mauris, eu scelerisque mauris mattis in. Nunc sed leo arcu. Nulla non eleifend sapien.</div> </p></div>
        <div class="test"><h3>Column 2</h3><p>Nunc sed leo arcu. Nulla non eleifend sapien.</p></div>
    </ilw-columns>

`;

test("renders slotted items", async () => {
    const screen = render(content);
    const element = screen.container.querySelector('.test') as HTMLElement | null;
    await expect.element(element).toBeInTheDocument();
});

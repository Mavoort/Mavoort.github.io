
Welcome to mathematics-weekly!
------------------------------

I make [educational videos](https://www.youtube.com/@mavoort96) about scientific computing and applied mathematics.
This repo contains the source files for the corresponding website, [mathematics-weekly.org](https://mathematics-weekly.org).

The website was created with [Quarto](https://quarto.org), an open-source publishing system based on Pandoc.
The content is written in Markdown and converted to HTML using Quarto.
The PDF-documents are generated with [Typst](https://typst.app/), a fast and modern alternative to LuaLaTeX.

To use the slides from the videos for your own course, you can either open them in the webbrowser, or download the source files and built the site from stratch.
The latter might be necessary if you want to modify the content somehow, for example to change the theme or correct some mistakes.

To built the slides from scratch, install Quarto and Typst on your PC, then clone the repository and run `quarto render` while being in the main branch. The generated site will be written to the `_site` directory. 

``` {.bash}
sudo apt install quarto typst
git clone https://github.com/Mavoort/Mavoort.github.io mathematics-weekly
cd mathematics-weekly
python -m venv env
source env/bin/activate
pip install -r requirements.txt --upgrade
quarto add martinomagnifico/quarto-appearance
quarto add quarto-ext/pointer
quarto render
quarto publish gh-pages
```

The command `quarto publish gh-pages` will render everything and copy the generated files from the `_site` directory to the gh-pages branch. That way, that branch contains a clean built, without any source or config files.


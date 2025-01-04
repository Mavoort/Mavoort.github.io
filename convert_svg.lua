-- This custom filter converts svg-images to pdf-files.
-- That way, svg images can be used in LaTeX documents.
-- There are 3 options: imagemagick, inkscape, rsvg-convert
-- using rsvg is tricky because it is installed with snap on my computer.
--
-- source: https://github.com/quarto-dev/quarto-cli/issues/196#issuecomment-1066590162

function Image(el)
    if FORMAT == "latex" then
        -- convert svg to pdf
        if string.sub(el.src, -4) == '.svg' then
            local pdfName = string.gsub(el.src, "svg", "pdf")
            pandoc.pipe('/usr/bin/convert', { el.src, pdfName}, '')
            -- pandoc.pipe('/usr/bin/inkscape', { el.src, '--export-filename', pdfName}, '')
            -- pandoc.pipe('/snap/gnome-42-2204/176/usr/bin/rsvg-convert', { el.src, '--format', 'pdf', '--output', pdfName}, '')
            el.src = pdfName
            return el
        end
    end
end

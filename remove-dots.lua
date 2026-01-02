-- This filter removes dots . . . from HTML output
-- This is useful for creating pauses in Reveal.js slides
function Para(elem)
  -- Check if the output format is HTML
  if quarto.doc.format == "html" then
    -- Check if the paragraph consists only of three dots
    if #elem.content == 1 and elem.content[1].t == "Str" and elem.content[1].text == ". . ." then
      return {} -- Return an empty list, effectively removing the paragraph
    end
  end
  return nil -- Return nil to let Pandoc process the element normally
end

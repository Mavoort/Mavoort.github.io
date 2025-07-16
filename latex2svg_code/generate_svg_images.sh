#! /bin/bash
lualatex --interaction=nonstopmode assembly_of_load_vector_1d.tex
lualatex --interaction=nonstopmode assembly_of_load_vector_1d.tex
pdfcrop assembly_of_load_vector_1d.pdf
pdf2svg assembly_of_load_vector_1d-crop.pdf assembly_of_load_vector_1d.svg
rm -f *aux *log *pdf

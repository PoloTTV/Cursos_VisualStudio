from fpdf import FPDF

pdf = FPDF()

pdf.add_page()
pdf.image("Template.png", x = 0, y = 0)
pdf.set_font("Arial")
pdf.text(0,0, "Proyecto01")
pdf.text(10,10, "Proyecto01")



pdf.output("Proyecto1.pdf")
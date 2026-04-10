#!/usr/bin/env node

/**
 * DC CAP Portfolio Renderer
 *
 * Converts structured portfolio JSON data into professionally branded Word documents (.docx)
 * using DC CAP's brand system: Navy (#101A4C), Purple (#8352FF), Blue (#87B7D5), Tan (#FFF4ED)
 *
 * Usage:
 *   node render_portfolio.js <input.json> <output.docx>
 *
 * Example:
 *   node render_portfolio.js sample_portfolio_data.json sample_portfolio.docx
 */

const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  TextRun,
  BorderStyle,
  UniversalMeasure,
  VerticalAlign,
  AlignmentType,
  convertInchesToTwip,
} = require('docx');

// DC CAP Brand Colors
const COLORS = {
  navy: '101A4C',
  purple: '8352FF',
  blue: '87B7D5',
  tan: 'FFF4ED',
  white: 'FFFFFF',
};

// Helper function to create a bordered table cell with specific styling
function createTableCell(text, options = {}) {
  const {
    backgroundColor = COLORS.white,
    textColor = COLORS.navy,
    bold = false,
    italic = false,
    align = AlignmentType.LEFT,
    verticalAlign = VerticalAlign.CENTER,
  } = options;

  return new TableCell({
    shading: {
      fill: backgroundColor,
    },
    children: [
      new Paragraph({
        text: text,
        alignment: align,
        spacing: { line: 240 },
        run: {
          bold,
          italic,
          color: textColor,
        },
      }),
    ],
    verticalAlign: verticalAlign,
    margins: {
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
    },
  });
}

// Helper to create a paragraph with custom styling
function createStyledParagraph(text, options = {}) {
  const {
    color = COLORS.navy,
    bold = false,
    italic = false,
    size = 22, // 11pt = 22 half-points
    align = AlignmentType.LEFT,
    spacing = 200,
    isSectionHeader = false,
  } = options;

  return new Paragraph({
    text: text,
    alignment: align,
    spacing: { line: spacing, after: isSectionHeader ? 200 : 100 },
    run: {
      bold,
      italic,
      size,
      color,
      font: isSectionHeader ? 'Arial' : 'Georgia',
    },
  });
}

// Main rendering function
async function renderPortfolio(inputFile, outputFile) {
  try {
    // Read and parse input JSON
    if (!fs.existsSync(inputFile)) {
      throw new Error(`Input file not found: ${inputFile}`);
    }

    const portfolioData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    const sections = [];

    // 1. Cover Header Section (Navy background bar)
    sections.push(
      new Table({
        width: { size: 100, type: 'pct' },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: COLORS.navy },
                margins: { top: 200, bottom: 200, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    text: 'DC CAP SCHOLARS',
                    alignment: AlignmentType.CENTER,
                    spacing: { line: 240 },
                    run: {
                      size: 48, // 24pt
                      bold: true,
                      color: COLORS.white,
                      font: 'Arial',
                    },
                  }),
                  new Paragraph({
                    text: 'AI Leadership Pilot — Task Portfolio',
                    alignment: AlignmentType.CENTER,
                    spacing: { line: 240, after: 240 },
                    run: {
                      size: 28, // 14pt
                      color: COLORS.white,
                      font: 'Arial',
                    },
                  }),
                  new Paragraph({
                    text: portfolioData.taskName,
                    alignment: AlignmentType.CENTER,
                    spacing: { line: 240, after: 120 },
                    run: {
                      size: 44, // 22pt
                      bold: true,
                      color: COLORS.white,
                      font: 'Arial',
                    },
                  }),
                  new Paragraph({
                    text: `${portfolioData.participantName} · ${portfolioData.unit} · ${portfolioData.date}`,
                    alignment: AlignmentType.CENTER,
                    spacing: { line: 240 },
                    run: {
                      size: 22, // 11pt
                      color: COLORS.white,
                      font: 'Georgia',
                    },
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );

    sections.push(new Paragraph({ text: '' })); // Spacing

    // 2. Task Overview Section
    sections.push(
      createStyledParagraph('TASK OVERVIEW', {
        color: COLORS.purple,
        bold: true,
        size: 28, // 14pt
        isSectionHeader: true,
      })
    );

    sections.push(
      createStyledParagraph(`Competency: ${portfolioData.competency}`)
    );
    sections.push(
      createStyledParagraph(`Week: ${portfolioData.week}`)
    );
    sections.push(
      createStyledParagraph(`Success Criteria: ${portfolioData.successCriteria}`)
    );
    sections.push(new Paragraph({ text: '' }));

    // 3. Initial Submission Section
    if (portfolioData.sections.initialSubmission) {
      sections.push(
        createStyledParagraph('INITIAL SUBMISSION', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );
      sections.push(
        createStyledParagraph(portfolioData.sections.initialSubmission)
      );
      sections.push(new Paragraph({ text: '' }));
    }

    // 4. Assessment Section
    if (portfolioData.sections.assessment) {
      sections.push(
        createStyledParagraph('ASSESSMENT', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );
      sections.push(
        createStyledParagraph(portfolioData.sections.assessment)
      );
      sections.push(new Paragraph({ text: '' }));
    }

    // 5. Revised Submission Section
    if (portfolioData.sections.revisedSubmission) {
      sections.push(
        createStyledParagraph('REVISED SUBMISSION', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );
      sections.push(
        createStyledParagraph(portfolioData.sections.revisedSubmission)
      );
      sections.push(new Paragraph({ text: '' }));
    }

    // 6. Growth Trajectory Section
    if (portfolioData.sections.growthTrajectory && portfolioData.sections.growthTrajectory.length > 0) {
      sections.push(
        createStyledParagraph('GROWTH TRAJECTORY', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );

      // Create growth table
      const growthRows = [
        // Header row
        new TableRow({
          children: [
            createTableCell('Dimension', {
              backgroundColor: COLORS.navy,
              textColor: COLORS.white,
              bold: true,
            }),
            createTableCell('Initial Level', {
              backgroundColor: COLORS.navy,
              textColor: COLORS.white,
              bold: true,
            }),
            createTableCell('Revised Level', {
              backgroundColor: COLORS.navy,
              textColor: COLORS.white,
              bold: true,
            }),
            createTableCell('What Changed', {
              backgroundColor: COLORS.navy,
              textColor: COLORS.white,
              bold: true,
            }),
          ],
        }),
      ];

      // Data rows with alternating shading
      portfolioData.sections.growthTrajectory.forEach((item, index) => {
        const bgColor = index % 2 === 0 ? COLORS.white : COLORS.tan;
        growthRows.push(
          new TableRow({
            children: [
              createTableCell(item.dimension, { backgroundColor: bgColor }),
              createTableCell(item.initial, { backgroundColor: bgColor }),
              createTableCell(item.revised, { backgroundColor: bgColor }),
              createTableCell(item.whatChanged, { backgroundColor: bgColor }),
            ],
          })
        );
      });

      sections.push(
        new Table({
          width: { size: 100, type: 'pct' },
          rows: growthRows,
        })
      );
      sections.push(new Paragraph({ text: '' }));

      // Overall Readiness
      if (portfolioData.sections.overallReadiness) {
        sections.push(
          createStyledParagraph(
            `Overall Readiness: ${portfolioData.sections.overallReadiness}`,
            { bold: true }
          )
        );
        sections.push(new Paragraph({ text: '' }));
      }
    }

    // 7. Participant Reflection Section
    if (portfolioData.sections.reflection) {
      sections.push(
        createStyledParagraph('PARTICIPANT REFLECTION', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );

      if (portfolioData.sections.reflection.prompt) {
        sections.push(
          createStyledParagraph(portfolioData.sections.reflection.prompt, {
            italic: true,
          })
        );
      }

      if (portfolioData.sections.reflection.response) {
        sections.push(
          createStyledParagraph(portfolioData.sections.reflection.response)
        );
      }
      sections.push(new Paragraph({ text: '' }));
    }

    // 8. Facilitator Notes Section
    if (portfolioData.sections.facilitatorNotes) {
      sections.push(
        createStyledParagraph('FACILITATOR NOTES', {
          color: COLORS.purple,
          bold: true,
          size: 28,
          isSectionHeader: true,
        })
      );

      if (portfolioData.sections.facilitatorNotes.pattern) {
        sections.push(
          createStyledParagraph(
            `Pattern: ${portfolioData.sections.facilitatorNotes.pattern}`
          )
        );
      }

      if (portfolioData.sections.facilitatorNotes.discussionQuestion) {
        sections.push(
          createStyledParagraph(
            `Discussion Question: ${portfolioData.sections.facilitatorNotes.discussionQuestion}`
          )
        );
      }
      sections.push(new Paragraph({ text: '' }));
    }

    // 9. Footer
    sections.push(new Paragraph({ text: '' }));
    sections.push(
      createStyledParagraph('DC CAP · dccapscholars.org', {
        align: AlignmentType.CENTER,
        size: 20, // 10pt
      })
    );
    sections.push(
      createStyledParagraph('AI Deployment Leadership Training Pilot · 2026', {
        align: AlignmentType.CENTER,
        size: 20,
      })
    );

    // Create document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: sections,
          margins: {
            top: convertInchesToTwip(1),
            right: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1),
          },
        },
      ],
    });

    // Write to file
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(outputFile, buffer);

    console.log(`Portfolio rendered successfully: ${outputFile}`);
    return true;
  } catch (error) {
    console.error('Error rendering portfolio:', error.message);
    process.exit(1);
  }
}

// CLI Entry Point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node render_portfolio.js <input.json> <output.docx>');
    console.error('Example: node render_portfolio.js sample_portfolio_data.json sample_portfolio.docx');
    process.exit(1);
  }

  const inputFile = args[0];
  const outputFile = args[1];

  renderPortfolio(inputFile, outputFile);
}

module.exports = { renderPortfolio };

/**
 * @file streamUtils.ts
 * @description Progressive JSON Stream Chunk Parser.
 * Slices standalone JSON component records out of a rolling string token text stream.
 */

/**
 * Stateful token buffer manager designed to isolate complete objects out of streaming arrays.
 */
export class ChunkAccumulator {
  private buffer: string = '';

  /**
   * Appends an unverified text token chunk and extracts complete, individual JSON structures.
   * @param chunk - The raw text token fragment string incoming from the execution loop.
   * @returns Array of fully extractable node objects parsed from the buffer.
   */
  public pushChunk(chunk: string): any[] {
    this.buffer += chunk;
    const extractedObjects: any[] = [];
    
    // Continually loop as long as the buffer contains potentially complete structural objects
    while (true) {
      const openBraceIndex = this.buffer.indexOf('{');
      if (openBraceIndex === -1) {
        // No structural open brackets found; clear the text buffer and exit the current loop pass
        break;
      }

      let braceCount = 0;
      let closeBraceIndex = -1;
      let insideString = false;
      let escaped = false;

      // Scan characters sequentially starting from our targeted opening brace index positioning
      for (let i = openBraceIndex; i < this.buffer.length; i++) {
        const char = this.buffer[i];

        if (escaped) {
          escaped = false;
          continue;
        }

        if (char === '\\') {
          escaped = true;
          continue;
        }

        if (char === '"') {
          insideString = !insideString;
          continue;
        }

        if (!insideString) {
          if (char === '{') {
            braceCount++;
          } else if (char === '}') {
            braceCount--;
            if (braceCount === 0) {
              closeBraceIndex = i;
              break;
            }
          }
        }
      }

      // Verify if a complete structural pairing index was cleanly found
      if (closeBraceIndex !== -1) {
        // Extract the complete, standalone JSON object text substring block
        const targetJsonTextString = this.buffer.slice(openBraceIndex, closeBraceIndex + 1);
        
        try {
          const fullyParsedNodeObject = JSON.parse(targetJsonTextString);
          extractedObjects.push(fullyParsedNodeObject);
        } catch (parseFault) {
          console.error(`[STREAM_PARSE_FAULT] ⚠️ Failed parsing extracted substring slice:`, parseFault);
        }

        // Trim the buffer string up to the character right after our processed closing brace positioning
        this.buffer = this.buffer.slice(closeBraceIndex + 1);
      } else {
        // The current string sequence is incomplete; exit the loop and wait for subsequent chunks
        break;
      }
    }

    return extractedObjects;
  }

  /**
   * Diagnostic inspector hook returning the current remaining length of the rolling buffer.
   */
  public getBufferLength(): number {
    return this.buffer.length;
  }
}

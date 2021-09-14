#lang racket

(define table (make-hash))

(for ([i (in-range 0 1000)]
      [j (in-range 0 1000)])
  (printf "Value ~a, ~a\n" i j))
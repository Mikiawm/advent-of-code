#lang racket

(define table (make-hash))

(for ([i (in-range 0 1000)]
      [j (in-range 0 1000)])
  (hash-set! table (cons i j) 0)
  (printf "Value ~a, ~a\n" i j)
  (display table))
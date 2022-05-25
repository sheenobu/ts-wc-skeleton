{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [ yarn nodePackages.typescript caddy ];
  inputsFrom = with pkgs; [ ];
}

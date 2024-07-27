terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_instance" "e-com_api" {
  ami           = "ami-060e277c0d4cce553"
  instance_type = "t2.micro"

  tags = {
    Name = "e-commerce_api_instance"
  }
}
